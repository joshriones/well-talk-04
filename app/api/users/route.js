import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req) {
  const userData = await req.json();
  const { role } = userData;

  try {
    let newUser;
    if (role === "student") {
      newUser = await db.user.create({
        data: {
          ...userDataWithoutRole,
          Student: {
            create: {
              college: userData.college,
              program: userData.program,
              year: userData.year,
              birthDate: userData.birthDate,
              contactNumber: userData.contactNumber,
              address: userData.address,
            },
          },
        },
        include: {
          Student: true,
        },
      });
    } else if (role === "teacher") {
      newUser = await db.user.create({
        data: {
          ...userDataWithoutRole,
          Teacher: {
            create: {
              college: userData.college,
            },
          },
        },
        include: {
          Teacher: true,
        },
      });
    } else if (role == "counselor") {
      newUser = await db.user.create({
        data: {
          ...userDataWithoutRole,
          Counselor: {},
        },
        include: {
          Counselor: true,
        },
      });
    }
    return NextResponse.json({ role });
  } catch (error) {
    console.log(error);
  }
}

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const {
//       institutionalEmail,
//       idNumber,
//       firstName,
//       middleName,
//       lastName,
//       gender,
//       password,
//     } = body;

//     const newUser = await db.user.create({
//       data: {
//         institutionalEmail,
//         idNumber,
//         firstName,
//         middleName,
//         lastName,
//         gender,
//         password,
//       },
//     });

//     return NextResponse.json(newUser);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({
//       message: "Something's wrong with creating a user",
//       status: 400,
//     });
//   }
// }

export async function GET() {
  try {
    const users = await db.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 400 }
    );
  }
}
