export default function Footer() {
  return (
    <footer className="py-6 mt-6 text-white w-full">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/zulalcengiz/"
          className="text-gray-600 hover:text-gray-900 transition duration-900 ease-in"
        >
          Linkedin
        </a>

        <a
          href="https://github.com/zulalc"
          className="text-gray-600 hover:text-gray-900 transition duration-900 ease-in"
        >
          GitHub
        </a>
      </div>
      <p className="text-center font-bold text-gray-500 mt-4">
        &copy; 2024 Football. All rights reserved.
      </p>
    </footer>
  );
}
