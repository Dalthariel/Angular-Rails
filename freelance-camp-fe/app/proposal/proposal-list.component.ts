import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['../styles/proposal-list.component.css'],
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(42, 'HHGTTG', 'http://www.zombo.com', 'ruby on rails', 321, 75, 7, 'username@server.com')
	proposalTwo: Proposal = new Proposal(17, 'BvIllum', 'http://www.foshata.com', 'ruby on rails', 123, 75, 5, 'username@server.com')
	proposalThree: Proposal = new Proposal(23, 'SJGames', 'http://www.smouch.com', 'ruby on rails', 1723, 75, 10, 'username@server.com')
	proposalFour: Proposal = new Proposal(55555, 'Discordia', 'https://www.principiadiscordia.com/book/1.php', 'ruby on rails', 150, 75, 15, 'username@server.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree,
		this.proposalFour,
	]
}