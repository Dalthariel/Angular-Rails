"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var proposal_1 = require("./proposal");
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(42, 'HHGTTG', 'http://www.zombo.com', 'ruby on rails', 321, 75, 7, 'username@server.com');
        this.proposalTwo = new proposal_1.Proposal(17, 'BvIllum', 'http://www.foshata.com', 'ruby on rails', 123, 75, 5, 'username@server.com');
        this.proposalThree = new proposal_1.Proposal(23, 'SJGames', 'http://www.smouch.com', 'ruby on rails', 1723, 75, 10, 'username@server.com');
        this.proposalFour = new proposal_1.Proposal(55555, 'Discordia', 'https://www.principiadiscordia.com/book/1.php', 'ruby on rails', 150, 75, 15, 'username@server.com');
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree,
            this.proposalFour,
        ];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-list',
            templateUrl: 'proposal-list.component.html',
            styleUrls: ['../styles/proposal-list.component.css'],
        })
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map