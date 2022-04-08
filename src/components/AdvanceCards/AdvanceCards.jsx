import React from 'react'
import LinkingCard from '../LinkingCard/LinkingCard';
import SmallCards from '../SmallCards/SmallCards';
import './AdvanceCards.css';
export default function AdvanceCards() {
  return (
    <>
        
		<div class="page">	
			<div class="pcss3t pcss3t-effect-scale pcss3t-theme-1">
				<input type="radio" name="pcss3t" checked  id="tab1"class="tab-content-first"/>
				<label for="tab1"><i class="icon-bolt"></i>Tesla</label>
				
				<input type="radio" name="pcss3t" id="tab2" class="tab-content-2"/>
				<label for="tab2"><i class="icon-picture"></i>da Vinci</label>
				
				<input type="radio" name="pcss3t" id="tab3" class="tab-content-3"/>
				<label for="tab3"><i class="icon-cogs"></i>Einstein</label>
				
				<input type="radio" name="pcss3t" id="tab5" class="tab-content-last"/>
				<label for="tab5"><i class="icon-globe"></i>Newton</label>
				
				<ul>
					<li class="tab-content tab-content-first typography">
					<SmallCards/>
					</li>
					
					<li class="tab-content tab-content-2 typography">
						<h1>Leonardo da Vinci</h1>
						<p>Italian Renaissance polymath: painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, cartographer, botanist, and writer. His genius, perhaps more than that of any other figure, epitomized the Renaissance humanist ideal. Leonardo has often been described as the archetype of the Renaissance Man, a man of "unquenchable curiosity" and "feverishly inventive imagination". He is widely considered to be one of the greatest painters of all time and perhaps the most diversely talented person ever to have lived. According to art historian Helen Gardner, the scope and depth of his interests were without precedent and "his mind and personality seem to us superhuman, the man himself mysterious and remote". Marco Rosci states that while there is much speculation about Leonardo, his vision of the world is essentially logical rather than mysterious, and that the empirical methods he employed were unusual for his time.</p>
						<p class="text-right"><em>Find out more about Leonardo da Vinci from <a href="http://en.wikipedia.org/wiki/Leonardo_da_Vinci" target="_blank">Wikipedia</a>.</em></p>
					</li>
					
					<li class="tab-content tab-content-3 typography">
						<SmallCards/>
					</li>
					
					<li class="tab-content tab-content-last typography">
						<div class="typography">
						<LinkingCard/>
						</div>
					</li>
				</ul>
			</div>
		</div>
    </>
  )
}
