import Link from 'next/link'

const items = [
	{
		id: 1,
		name: 'JavaScript',
		image: 'assets/images/skills/javascript.svg',
	},
	{
		id: 2,
		name: 'ReactJS',
		image: 'assets/images/skills/react.svg',
	},
	{
		id: 3,
		name: 'NextJS',
		image: 'assets/images/skills/nextjs.svg',
	},
	{
		id: 4,
		name: 'VueJS',
		image: 'assets/images/skills/vuejs.svg',
	},
	{
		id: 5,
		name: 'NuxtJS',
		image: 'assets/images/skills/nuxtjs.svg',
	},
	{
		id: 6,
		name: 'Tailwind CSS',
		image: 'assets/images/skills/tailwindcss.svg',
	},
	{
		id: 7,
		name: 'SASS',
		image: 'assets/images/skills/sass.svg',
	},
	{
		id: 8,
		name: 'NodeJS',
		image: 'assets/images/skills/nodejs.svg',
	},
	{
		id: 9,
		name: 'ExpressJS',
		image: 'assets/images/skills/expressjs.svg',
	},
	{
		id: 10,
		name: 'AWS Amplify',
		image: 'assets/images/skills/awsamplify.svg',
	},
	{
		id: 11,
		name: 'AWS Appsync',
		image: 'assets/images/skills/awsappsync.svg',
	},
	{
		id: 12,
		name: 'AWS Lambda',
		image: 'assets/images/skills/awslambda.svg',
	},
	{
		id: 13,
		name: 'AWS Cognito',
		image: 'assets/images/skills/awscognito.svg',
	},
	{
		id: 14,
		name: 'AWS SNS/SES',
		image: 'assets/images/skills/awssns.svg',
	},
	{
		id: 15,
		name: 'AWS DynamoDB',
		image: 'assets/images/skills/awsdynamodb.svg',
	},
	{
		id: 16,
		name: 'MongoDB',
		image: 'assets/images/skills/mongodb.svg',
	},
	{
		id: 17,
		name: 'PostgreSQL',
		image: 'assets/images/skills/postgresql.svg',
	},
	{
		id: 18,
		name: 'GraphQL',
		image: 'assets/images/skills/graphql.svg',
	},
	{
		id: 19,
		name: 'Github',
		image: 'assets/images/skills/githubv2.svg',
	},
]

const Skill = () => {
	return (
		<section id='skills' className='skill-area rel z-1'>
			<div className='for-bgc-black pt-130 rpt-100 pb-100 rpb-70'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-6 col-lg-8'>
							<div className='text-center skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s'>
								<div className='section-title mb-40'>
									<span className='sub-title mb-15'>My Skills</span>
									<h2>
										Let’s Explore Popular <br />
										<span>Skills &amp; Experience</span>
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className='skill-items-wrap'>
						<div className='row'>
							{items.map((item, index) => (
								<div key={index} className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6'>
									<div className='skill-item wow fadeInUp delay-0-2s'>
										<img width={55} height={55} src={item.image} alt='Skill' />
										<h5>{item.name}</h5>
									</div>
								</div>
							))}
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
export default Skill

export const Skill2 = () => {
	return (
		<section id='skills' className='skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-5'>
						<div className='skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s'>
							<div className='section-title mb-60'>
								<span className='sub-title mb-15'>
									<i className='flaticon-asterisk-1' /> professional skill of me
								</span>
								<h2>professional skill</h2>
							</div>
							<div className='row justify-content-between align-items-center'>
								<div className='col-8'>
									<img src='assets/images/skills/skill-man.png' alt='Skill' />
								</div>
								<div className='col-4'>
									<img src='assets/images/shape/skill-arrow.png' alt='Arrow' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-7'>
						<div className='skill-wrap-two'>
							<div className='row gap-40'>
								{items.map(
									(item) =>
										item.id <= 6 && (
											<div className='col-md-4 col-sm-4 col-6' key={item.id}>
												<div className='skill-item-two wow fadeInUp delay-0-3s'>
													<div className='icon-percent'>
														<img src={item.image} alt='Skill' />
														<span className='percent'>{item.value}%</span>
													</div>
													<h5 className='title'>{item.name}</h5>
												</div>
											</div>
										)
								)}
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
