import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TiktokLogo from "../../public/tik-tok.png";
import LogoTiktok from "@/components/LogoTiktok";
import IconQuestionMark from "@/components/IconQuestionMark";
import IconChevLeft from "@/components/IconChevLeft";

export default function Home() {
	const [formInput, setFormInput] = useState({
		username: "",
		otp: "",
	});

	return (
		<div className="flex flex-col h-screen">
			<nav className="py-4 px-3 flex justify-between">
				<Link href="/">
					<LogoTiktok />
				</Link>

				<Link href="/help" className="flex items-center gap-1">
					<IconQuestionMark />
					<span>Feedback and help</span>
				</Link>
			</nav>
			<section>
				<div className="mx-auto lg:w-96 mt-12">
					<h1 className="font-bold text-center text-3xl">Login</h1>
					<form action="" method="POST" className="mt-5">
						<div className="flex items-center justify-between mb-1">
							<span className="text-gray-800 font-medium">Phone</span>
							<span className="text-gray-600 font-medium text-xs">Log in with email or username</span>
						</div>

						<div className="bg-gray-100 rounded-lg h-10 py-1 border border-gray-300 flex items-center mb-3">
							<select name="" id="" className="bg-transparent p-2">
								<option value="" selected>
									ID +62
								</option>
							</select>
							<span className="w-[1px] h-full bg-gray-300 mx-2 flex" />
							<input
								type="tel"
								name="username"
								placeholder="Phone number"
								className="bg-transparent flex-grow focus:outline-none"
								onChange={e => {
									setFormInput({
										username: e.target.value,
										otp: formInput.otp,
									});
								}}
							/>
						</div>

						<div className="bg-gray-100 rounded-lg h-12 border border-gray-300 flex items-center mb-3">
							<input
								type="text"
								maxLength={6}
								placeholder="Enter 6-digit code"
								className="flex-grow bg-transparent px-3 focus:outline-none"
							/>
							<span className="w-[1px] h-full bg-gray-300 ms-2 flex" />

							<button
								className="bg-transparent border-none disabled:text-gray-400 font-medium h-full px-4 disabled:cursor-not-allowed"
								disabled={formInput.username.length === 0}
							>
								Send code
							</button>
						</div>

						<Link href="https://www.tiktok.com/login/phone-or-email/phone-password" className="text-gray-800 text-sm">
							Log in with password
						</Link>

						<div className="mt-4">
							<button className="w-full p-4 rounded-lg font-bold bg-[#fe2c55] text-white">Log in</button>
							<button className="w-full p-4 rounded-lg bg-transparent flex items-center gap-1 justify-center mt-8">
								<IconChevLeft />
								<span>Go back</span>
							</button>
						</div>
					</form>
				</div>
			</section>
			<div className="flex items-center gap-2 mt-auto py-4 justify-center border-t border-gray-100">
				<span className="text-gray-800">Don’t have an account?</span>
				<Link href="/" className="text-[#fe2c55]">
					Sign up
				</Link>
			</div>
			<footer className="bg-black text-white py-7 px-32">
				<div className="container mx-auto flex items-center justify-between">
					<select name="" id="" className="lg:min-w-40 bg-transparent border border-gray-500 focus:outline-none p-2">
						<option value="english">English</option>
					</select>
					<small className="text-gray-400 text-base">&copy; {new Date().getFullYear()} TikTok</small>
				</div>
			</footer>
		</div>
	);
}
