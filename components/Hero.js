import Link from 'next/link'
import Counter from './Counter'

const counterData = [
	{ id: 1, text: 'Years Of Experience', value: '5', valueType: 'plus' },
	{ id: 2, text: 'Project Complete', value: '20', valueType: 'plus' },
	{ id: 3, text: 'Client Satisfactions', value: '90', valueType: 'percent' },
]

const Hero = () => {
	return (
		<section id='home' className='main-hero-area pt-150 pb-80 rel z-1'>
			<div className='container container-1620'>
				<div className='row align-items-center'>
					<div className='col-lg-4 col-sm-7'>
						<div className='hero-content rmb-55 wow fadeInUp delay-0-2s'>
							<span className='h2'>Hello, i’m </span>
							<h1>
								<b>Misbah Kashif</b> <br />
								Full Stack Developer
							</h1>
							<p>
								Build dynamic and highly scalable applications with seasoned full-stack developer skilled in MongoDB,
								Express.js, ReactJS, NodeJS & AWS Servcies
							</p>
							<div className='hero-btns'>
							<a legacyBehavior href="https://www.upwork.com/freelancers/~015b36b90fdc2f0f1f?mp_source=share" target="_blank">
									<span className='theme-btn'>
										Hire Me <i className='far fa-angle-right' />
									</span>
								</a>
								{/* <Link
									legacyBehavior
									href='#'>
									<a className='read-more'>
										Download Resume <i className='far fa-angle-right' />
									</a>
								</Link> */}
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-sm-5 order-lg-3'>
						<div className='hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s'>
							{counterData.map((count) => (
								<div className='counter-item counter-text-wrap' key={count.id}>
									<Counter end={count.value} extraClass={count.valueType} />
									<span className='counter-title'>{count.text}</span>
								</div>
							))}
						</div>
					</div>
					<div className='col-lg-5'>
						<div className='author-image-part wow fadeIn delay-0-3s'>
							<div className='bg-circle' />
							<img src='assets/images/hero/me.png' alt='Author' />
							<div className='progress-shape'>
								<img src='assets/images/hero/progress-shape.png' alt='Progress' />
							</div>
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
	)
}
export default Hero

export const Hero2 = () => {
	return (
		<div id='home' className='hero-area-two pt-150 rel z-2'>
			<div className='container rel z-3'>
				<div className='hero-two-content'>
					<span className='sub-title wow fadeInLeft delay-0-1s'>
						<i className='flaticon-asterisk-1' /> UI/UX Designer
					</span>
					<span className='title wow fadeInLeft delay-0-2s'>
						Hello <small>i,m</small>
					</span>
					<span className='name wow fadeInRight delay-0-4s'>Muhammad Ahmad</span>
					<span className='designations wow fadeInLeft delay-0-6s'>
						<span>Web</span> Developer
					</span>
				</div>
				<div className='row justify-content-center'>
					<div className='col-xl-6 col-lg-7'>
						<div className='author-image-part wow fadeIn delay-0-3s'>
							<div className='bg-circle' />
							<img src='assets/images/hero/hero-two.png' alt='Author' />
						</div>
					</div>
				</div>
			</div>
			<a href='#about' className='scroll-down'>
				<img src='assets/images/hero/scroll-down.png' alt='' />
			</a>
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
		</div>
	)
}
