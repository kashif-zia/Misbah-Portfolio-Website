'use client'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
	return (
		<Accordion defaultActiveKey='collapseOne' className='accordion wow fadeInUp delay-0-4s' id='faq-accordion'>
			<div className='accordion-item'>
				<h5 className='accordion-header'>
					<Accordion.Toggle as={'button'} className='accordion-button collapsed' eventKey='collapseOne'>
						How long does it take to deliver a software project?
					</Accordion.Toggle>
				</h5>
				<Accordion.Collapse eventKey='collapseOne' className='accordion-collapse'>
					<div className='accordion-body'>
						<p>
							For a small software project, it takes around 6 to 8 weeks whereas for a large project, it can take
							anywhere in between 12 to 16 weeks. However, this timeline can vary according to the complexity of the
							project and the required features.
						</p>
					</div>
				</Accordion.Collapse>
			</div>
			<div className='accordion-item'>
				<h5 className='accordion-header'>
					<Accordion.Toggle as={'button'} className='accordion-button collapsed' eventKey='collapseTwo'>
						How do you calculate the cost of a basic software development project?
					</Accordion.Toggle>
				</h5>
				<Accordion.Collapse eventKey='collapseTwo' className='accordion-collapse'>
					<div className='accordion-body'>
						<p>
							I calculate the cost of a software project by multiplying our hourly rate by the total number of hours
							required to complete the project.
						</p>
					</div>
				</Accordion.Collapse>
			</div>
			<div className='accordion-item'>
				<h5 className='accordion-header'>
					<Accordion.Toggle as={'button'} className='accordion-button collapsed' eventKey='collapseThree'>
						Do you also take care of the post-launch maintenance?
					</Accordion.Toggle>
				</h5>
				<Accordion.Collapse eventKey='collapseThree' className='accordion-collapse'>
					<div className='accordion-body'>
						<p>Yes, I do offer post-launch maintenance services to our valued clients.</p>
					</div>
				</Accordion.Collapse>
			</div>
			<div className='accordion-item'>
				<h5 className='accordion-header'>
					<Accordion.Toggle as={'button'} className='accordion-button collapsed' eventKey='collapseFour'>
						Which steps do you take to develop a software project?
					</Accordion.Toggle>
				</h5>
				<Accordion.Collapse eventKey='collapseFour' className='accordion-collapse '>
					<div className='accordion-body'>
						<p>{'Analyze -> Design -> Extract -> Automate -> Develop -> Accelerate'}</p>
					</div>
				</Accordion.Collapse>
			</div>
		</Accordion>
	)
}
export default Faq
