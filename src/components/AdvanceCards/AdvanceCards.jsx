import React from 'react'
import LinkingCard from '../LinkingCard/LinkingCard';
import SmallCards from '../SmallCards/SmallCards';
import './AdvanceCards.css';

export default function AdvanceCards() {
	return (
		<>
			<header className='header-text text-center'>
				<h4>WHAT CLIENTS SAY</h4>
				<h1>Testimonial</h1>
			</header>
			<div class="page">
				<div class="pcss3t pcss3t-effect-scale pcss3t-theme-1">
					<input type="radio" name="pcss3t" checked id="tab1" class="tab-content-first" />
					<label for="tab1"><i class="icon-bolt"></i>Education</label>

					<input type="radio" name="pcss3t" id="tab2" class="tab-content-2" />
					<label for="tab2"><i class="icon-picture"></i>Professional Skills</label>

					<input type="radio" name="pcss3t" id="tab3" class="tab-content-3" />
					<label for="tab3"><i class="icon-cogs"></i>Experience</label>

					<input type="radio" name="pcss3t" id="tab5" class="tab-content-last" />
					<label for="tab5"><i class="icon-globe"></i>Interview</label>
					<ul className='cards-height'>
						<li class="tab-content tab-content-first typography">
							<SmallCards />
						</li>
						<li class="tab-content tab-content-2 typography">
							<LinkingCard />
						</li>
						<li class="tab-content tab-content-3 typography">
							{/* <SmallCards /> */}
						</li>
						<li class="tab-content tab-content-last typography">
							<div class="typography" >
								<LinkingCard />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
