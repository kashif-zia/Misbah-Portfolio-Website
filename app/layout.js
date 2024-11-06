import { DM_Sans, Inter } from 'next/font/google'

import Preloader from '@/layout/Preloader'
import '@css/animate.min.css'
import '@css/bootstrap.min.css'
import '@css/flaticon.min.css'
import '@css/fontawesome-5.14.0.min.css'
import '@css/nice-select.min.css'
import '@css/slick.min.css'
import '@css/style.css'
import './globals.css'

/** google fonts */
const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-inter',
	display: 'swap',
})
const dm_sans = DM_Sans({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-dm_sans',
	display: 'swap',
})

/** Font family */
const fontFamily = `${inter.variable} ${dm_sans.variable} `

export const metadata = {
	title: {
		template: 'Misbah Kashif | Full-Stack Developer (5+ Yrs Exp)',
		default: 'Misbah Kashif | Full-Stack Developer (5+ Yrs Exp)', // a default is required when using pages
	},
	description:
		'Highly skilled full-stack developer (HTML, CSS, JS, React, Vue, Next.js, Nuxt.js) with 5+ years of experience',
	keywords:
		'Full-stack developer, Web developer, CI/CD, Web development, Front-end development, Back-end development, UI/UX design, JavaScript developer, React developer, Vue developer, Next.js developer, Nuxt.js developer, Bootstrap developer, jQuery developer, HTML developer, CSS developer, Remote full-stack developer, Remote web developer, Freelance full-stack developer, Freelance web developer, Project management for web development, Hire full-stack developer, Hire web developer, Web development services',
	publisher: 'https://www.linkedin.com/in/misbah-kashif/',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${fontFamily} scroll-smooth`}>
			<body>
				<Preloader />
				{children}
			</body>
		</html>
	)
}
