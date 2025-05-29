// components/UI/Footer.tsx
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const techStack = [
    { name: "Next.js", href: "https://nextjs.org" },
    { name: "Tailwind CSS", href: "https://tailwindcss.com" },
    { name: "TypeScript", href: "https://www.typescriptlang.org" },
    { name: "Vercel", href: "https://vercel.com" },
  ];

  const usefulLinks = [
    { name: "Documentación", href: "/docs" },
    { name: "Tutoriales", href: "/tutoriales" },
    { name: "Códigos", href: "/snippets" },
    { name: "Roadmaps", href: "/roadmaps" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/tuusuario" },
    { icon: <FaTwitter />, href: "https://twitter.com/tuusuario" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/tuusuario" },
    { icon: <FaYoutube />, href: "https://youtube.com/tucanal" },
    { icon: <SiDevdotto />, href: "https://dev.to/tuusuario" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DevBlog
              </span>
            </Link>
            <p className="text-sm mb-4">
              Blog tecnológico con los últimos tutoriales, noticias y recursos para desarrolladores.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Enlaces útiles</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Categorías */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Categorías</h3>
            <ul className="space-y-2">
              {["React", "Next.js", "JavaScript", "TypeScript", "CSS", "Backend"].map(
                (category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/categorias/${category.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Suscríbete para recibir los últimos artículos y recursos.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} DevBlog. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Link
                key={index}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                {tech.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}