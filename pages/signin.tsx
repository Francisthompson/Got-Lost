import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignIn() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Static page - just redirect to home for now
		console.log("Sign in attempt:", formData);
		router.push("/");
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
  //FIXME: Static page - does not save anything
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
			<div className="max-w-md w-full">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
						Welcome Back
					</h1>
					<p className="text-gray-600 dark:text-gray-400">
						Still using the app to find the cafeteria? Respect.
					</p>
				</div>

				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
					<form onSubmit={handleSubmit} className="space-y-6">
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
								className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
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
								value={formData.password}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
								placeholder="Enter your password"
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
								>
									Forgot password?
								</a>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
						>
							Sign In
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Don't have an account?{" "}
							<Link
								href="/signup"
								className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
							>
								Sign up
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
