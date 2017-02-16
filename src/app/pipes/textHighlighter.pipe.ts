import { Pipe, PipeTransform } from '@angular/core';
/*
 * Checks if string starts with protocols like http, https or ftp. If it starts
 * with protocols, converts it to link.
 */
@Pipe({name: 'highlightText'})
export class HighlightText implements PipeTransform {
    public lastGSEID = '';

    transform(value:string, el):any {

        let content = el[1] && el[1].toLowerCase();
        let ele = el[0];

        // If GSE Id is changing add highlight class to it;
        if (content === 'gse' &&
            (!this.lastGSEID ||
            (this.lastGSEID && this.lastGSEID != value))) {

            //ele.innerHTML = value;
            ele.setAttribute('class', 'highlight');
            this.lastGSEID = value;
            return value;

        } else {
            return value;
        }
    }
}
