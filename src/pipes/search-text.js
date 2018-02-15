var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
/**
 * Generated class for the SearchText pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var SearchText = (function () {
    function SearchText() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchText.prototype.transform = function (list, searchTerm) {
        if (searchTerm) {
            //searchTerm = searchTerm.toUpperCase();
            return list.filter(function (item) {
                return (item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (item.desc.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (item.titleMain.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (item.title.toLowerCase().includes(searchTerm.toLowerCase())));
            });
        }
        else {
            return list;
        }
    };
    return SearchText;
}());
SearchText = __decorate([
    Pipe({
        name: 'search',
    })
], SearchText);
export { SearchText };
//# sourceMappingURL=search-text.js.map