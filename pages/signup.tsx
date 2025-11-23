import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		//FIXME: Static page - just redirect to sign in
		console.log("Sign up attempt:", formData);
		router.push("/signin");
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
			<div className="max-w-md w-full">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
						Create Account
					</h1>
					<p className="text-gray-600 dark:text-gray-400">
						Join now to stop walking into the wrong classrooms!
					</p>
				</div>

				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="fullName"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Full Name
							</label>
							<input
								id="fullName"
								name="fullName"
								type="text"
								required
								value={formData.fullName}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
								placeholder="John Doe"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Email Address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
								placeholder="you@example.com"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								minLength={8}
								value={formData.password}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
								placeholder="Create a strong password"
							/>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								Must be at least 8 characters long
							</p>
						</div>

						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Confirm Password
							</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								required
								minLength={8}
								value={formData.confirmPassword}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
								placeholder="Confirm your password"
							/>
						</div>

						<div className="flex items-start">
							<input
								id="terms"
								name="terms"
								type="checkbox"
								required
								className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
							/>
              {/* FIXME: Remove or update links to actual terms/privacy policy if keeping this */}
							<label
								htmlFor="terms"
								className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
							>
								I agree to the{" "}
								<a
									href="#"
									className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
								>
									Terms of Service
								</a>{" "}
								and{" "}
								<a
									href="#"
									className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
								>
									Privacy Policy
								</a>
							</label>
						</div>

						<button
							type="submit"
							className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
						>
							Create Account
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Already have an account?{" "}
							<Link
								href="/signin"
								className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
							>
								Sign in
							</Link>
						</p>
					</div>
				</div>

				<div className="mt-8 text-center">
					<Link
						href="/"
						className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
					>
						← Back to home
					</Link>
				</div>
			</div>
		</div>
	);
}
