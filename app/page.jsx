"use client";
import Footer from "@/components/ui/Footer";
import FullButton from "@/components/ui/buttons/FullButton";
import HollowButton from "@/components/ui/buttons/HollowButton";
import { Navbar } from "@/components/ui/LandingNav";
import { useRouter } from "next/navigation";
import { Parallax } from "react-parallax";

export default function Landing() {
	const router = useRouter();

	const handleSignInClick = () => {
		router.push("/login");
	};

	const handleCreateAccountClick = () => {
		router.push("registration/student");
	};
	return (
		<div>
			<main className="min-h-screen">
				<Navbar userType="landing" />
				<Parallax
					bgImage="/images/landing/hero-img.png"
					strength={500}
					className="jarallax jarallax-img title-img"
					style={{
						backgroundSize: "cover",
						backgroundPosition: "center top",
						minHeight: "90vh",
					}}
				>
					<div className="py-48 xl:px-96 text-center">
						<h2 className="text-5xl sm:text-6xl lg:text-8xl font-Merriweather">
							Supporting Student
						</h2>
						<h2 className="text-5xl sm:text-6xl lg:text-8xl mt-6 font-Merriweather">
							Well-being Together
						</h2>
						<p className="text-2xl sm:text-3xl lg:text-4xl xl:px-40 py-10 mb-8 text-stone-700 font-Jaldi">
							Your Campus Mental Wellness Hub: Connect with
							Counselors, Access Resources, and Build a Supportive
							Community for Mental Health
						</p>
						<div className="w-full flex flex-row gap-x-8 pb-12">
							<HollowButton
								className="w-1/2"
								onClick={handleSignInClick}
							>
								Sign In
							</HollowButton>
							<FullButton
								className="w-1/2"
								onClick={handleCreateAccountClick}
							>
								Create Account
							</FullButton>
						</div>
					</div>
				</Parallax>

				<div className="container flex flex-col justify-between mx-auto w-full gap-8 mt-6 mb-24">
					<div className="grid sm:grid-cols-1 md:grid-cols-3 mt-16 mb-8 gap-28 md:gap-16 ml-32">
						<div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
							<div className="flex items-center gap-6">
								<div className="mt-1 bg-green-50 border shadow border-green-100 transition-colors rounded-lg grid place-items-center p-2 w-16 h-16 shrink-0">
									<img
										src="images/landing/Google Calendar.png"
										alt="Event Organization Icon"
										className="w-full h-full object-contain"
									/>
								</div>
								<h1 className="font-heading text-2xl font-bold hover:text-gray-500 font-Merriweather ">
									Appointments
								</h1>
							</div>
							<div>
								<p className="text-lg sm:text-lg lg:text-lg text-stone-700 font-Jaldi">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.{" "}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
							<div className="flex items-center gap-6">
								<div className="mt-1 bg-green-50 border shadow border-green-100 border-indigo-100 transition-colors rounded-lg grid place-items-center p-2 w-16 h-16 shrink-0">
									<img
										src="images/landing/Technical Support.png"
										alt="Venue Management Icon"
										className="w-full h-full object-contain"
									/>
								</div>
								<h1 className="font-heading text-2xl font-bold hover:text-gray-500 font-Merriweather ">
									Assistance
								</h1>
							</div>
							<div>
								<p className="text-lg sm:text-lg lg:text-lg text-stone-700 font-Jaldi">
									{" "}
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.{" "}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
							<div className="flex items-center gap-6">
								<div className="mt-1 bg-green-50 border shadow border-green-100 transition-colors rounded-lg grid place-items-center p-2 w-16 h-16 shrink-0">
									<img
										src="images/landing/Journal.png"
										alt="Attendee Management Icon"
										className="w-full h-full object-contain"
									/>
								</div>
								<h1 className="font-heading text-2xl font-bold hover:text-gray-500 font-Merriweather ">
									Personal Journal
								</h1>
							</div>
							<div>
								<p className="text-lg sm:text-lg lg:text-lg text-stone-700 font-Jaldi">
									{" "}
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
					<hr className="my-4" />
				</div>

				<section
					id="featured"
					className="container mx-auto px-5 lg:px-0"
				>
					<div className="flex items-right justify-between">
						<h2 className="font-heading text-4xl ml-32 font-Merriweather">
							Featured Posts
						</h2>
						<div className="flex space-x-3">
							<button
								className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 uppercase"
								data-filter="*"
							>
								All
							</button>
							<button
								className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 uppercase"
								data-filter=".love"
							>
								Love
							</button>
							<button
								className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 uppercase"
								data-filter=".yoga"
							>
								Yoga
							</button>
							<button
								className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 uppercase"
								data-filter=".recipes"
							>
								Recipes
							</button>
							<button
								className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 uppercase"
								data-filter=".naturalherbs"
							>
								Natural Herbs
							</button>
						</div>
					</div>
				</section>

				<div className="container mx-72 px-5 lg:px-0">
					<div className="isotope-container mt-12">
						<div className="grid grid-cols-2 gap-4">
							<div className="item love lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											How 'Weak Ties' Can Strengthen Our
											Relationships
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
							<div className="item love lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl font-normal hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											How 'Weak Ties' Can Strengthen Our
											Relationships
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
							<div className="item yoga lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl font-normal hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											What It's Really Like to Date While
											Anxious
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
							<div className="item yoga lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl font-normal hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											What It's Really Like to Date While
											Anxious
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
							<div className="item recipes lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl font-normal hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											Benefits to Having Much Older
											Friends than you
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
							<div className="item recipes lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl font-normal hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											Benefits to Having Much Older
											Friends than you
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
							<div className="item naturalherbs lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl font-normal hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											How Often You Should Wash Your Hair
											in winter
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
							<div className="item naturalherbs lg:me-28">
								<div className="featured-post py-2">
									<span className="blog-date uppercase font-Jaldi">
										dating and Relationships
									</span>
									<h3 className="font-heading text-2xl font-normal hover:text-gray-500">
										<a
											href="blog-single.html"
											className="blog-link capitalize font-Merriweather"
										>
											How Often You Should Wash Your Hair
											in winter
										</a>
									</h3>
								</div>
								<hr className="my-4" />
							</div>
						</div>
					</div>
				</div>

				<section id="blog-block">
					<div className="columns-5 gap-0 pt-40">
						<figure className="blog-block-content image-zoom relative">
							<a
								href="https://www.verywellmind.com/the-best-mental-health-blogs-5205192"
								className=" "
							>
								<img
									className="blog-block-img"
									src="images/landing/blog7.png"
									alt=""
								/>
								<div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
									<h5 className="font-heading text-white text-xl p-12 font-Jaldi">
										5 Helpful Tips for Living Healthy Life
									</h5>
								</div>
							</a>
						</figure>
						<figure className="blog-block-content image-zoom relative">
							<a
								href="https://psychcentral.com/blog"
								className=" "
							>
								<img
									className="blog-block-img"
									src="images/landing/blog8.png"
									alt=""
								/>
								<div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
									<h5 className="font-heading text-white text-xl p-12 font-Jaldi">
										5 Helpful Tips for Living Healthy Life
									</h5>
								</div>
							</a>
						</figure>
						<figure className="blog-block-content image-zoom relative">
							<a href="blog-single.html" className=" ">
								<img
									className="blog-block-img"
									src="images/landing/blog9.png"
									alt=""
								/>
								<div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
									<h5 className="font-heading text-white text-xl p-12 font-Jaldi">
										5 Helpful Tips for Living Healthy Life
									</h5>
								</div>
							</a>
						</figure>
						<figure className="blog-block-content image-zoom relative">
							<a href="blog-single.html" className=" ">
								<img
									className="blog-block-img"
									src="images/landing/blog10.png"
									alt=""
								/>
								<div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
									<h5 className="font-heading text-white text-xl p-12 font-Jaldi">
										5 Helpful Tips for Living Healthy Life
									</h5>
								</div>
							</a>
						</figure>
						<figure className="blog-block-content image-zoom relative">
							<a href="blog-single.html" className=" ">
								<img
									className="blog-block-img"
									src="images/landing/blog11.png"
									alt=""
								/>
								<div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
									<h5 className="font-heading text-white text-xl p-12 font-Jaldi">
										5 Helpful Tips for Living Healthy Life
									</h5>
								</div>
							</a>
						</figure>
					</div>
				</section>

				<section id="cta" className="bg-gray-50">
					<div className="container mx-auto xl:px-60 py-40 px-5">
						<div className="lg:grid grid-cols-3 gap-6">
							<div className="grid grid-cols-subgrid col-span-2">
								<div className="col-span-2">
									<h2 className="font-Merriweather text-6xl">
										Need to ask <br />
										Something?
									</h2>
									<p className="pt-5 font-Jaldi text-lg">
										Have a Question or Concern? Our
										Supportive Team is Here to Listen,{" "}
										<br />
										Offer Guidance, and Provide the Help You
										Need. Don’t Hesitate To Ask.
									</p>
								</div>
							</div>
							<div className="mt-6 lg:hidden">
								<div className="grid grid-cols-1 gap-2">
									<label className="block">
										<input
											type="text"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-300 focus:ring-opacity-50"
											placeholder="Your Name"
										/>
									</label>
									<label className="block">
										<textarea
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-300 focus:ring-opacity-50"
											placeholder="Your Message"
										></textarea>
									</label>
									<button
										className="rounded-md text-white uppercase p-3 w-full"
										type="button"
										style={{ backgroundColor: "#6B9080" }}
									>
										Subscribe Now
									</button>
								</div>
							</div>
							<div className="mt-6 hidden lg:block">
								<div className="grid grid-cols-1 gap-2">
									<label className="block">
										<input
											type="text"
											className="mt-1 block w-full lg:w-96 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-300 focus:ring-opacity-50"
											placeholder="Your Name"
										/>
									</label>
									<label className="block">
										<textarea
											rows={5}
											cols={50}
											className="mt-1 block w-full lg:w-96 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-300 focus:ring-opacity-50"
											placeholder="Your Message"
										></textarea>
									</label>

									<button
										className="rounded-md text-white uppercase p-3 w-full lg:w-96"
										type="button"
										style={{ backgroundColor: "#6B9080" }}
									>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</div>
	);
}
