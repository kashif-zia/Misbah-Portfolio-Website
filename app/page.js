import About from '@/components/About'
import Blog from '@/components/Blog'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Services from '@/components/Services'
import Skill from '@/components/Skill'
import Testimonial from '@/components/Testimonial'
import PortfolioLayout from '@/layout/PortfolioLayout'

export default function Home() {
	return (
		<PortfolioLayout>
			{/* Hero Section Start */}
			<Hero />
			{/* Hero Section End */}
			{/* About Area start */}
			<About />
			{/* About Area end */}
			{/* Resume Area start */}
			<Resume />
			{/* Resume Area end */}
			{/* Services Area start */}
			<Services />
			{/* FAQs Area start */}
			<section id='faqs' className='faqs-area py-130 rpy-100 rel z-1'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='faq-image-part rmb-55 wow fadeInUp delay-0-2s'>
								<div className='image-one'>
									<img src='assets/images/faqs/faq-one.jpg' alt='FAQ' />
								</div>
								<div className='image-two'>
									<img src='assets/images/faqs/faq-two.jpg' alt='FAQ' />
								</div>
								<div className='square-shape' />
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='faq-content-part rel z-2'>
								<div className='section-title mb-40 wow fadeInUp delay-0-4s'>
									<h2>
										Professional Solutions For Your <span>Digital Product</span> Design and development
									</h2>
								</div>
								<Faq />
							</div>
						</div>
					</div>
				</div>
				<div className='bg-lines'>
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
			</section>
			{/* FAQs Area end */}
			{/* Services Area end */}
			{/* Skill Area start */}
			<Skill />
			{/* Skill Area end */}
			{/* Projects Area start */}
			<Projects />
			{/* Projects Area end */}
			{/* Testimonial Area start */}
			<Testimonial />
			{/* Testimonial Area end */}
			{/* Contact Area start */}
			<Contact />
			{/* Contact Area end */}
		</PortfolioLayout>
	)
}
