import { Pipe, PipeTransform } from '@angular/core';
/*
 * Checks if string starts with protocols like http, https or ftp. If it starts
 * with protocols, converts it to link.
 */
@Pipe({name: 'transformToLink'})
export class TransformToLink implements PipeTransform {
    transform(value:string, el):any {

        let textContent = value && value.toLowerCase();

        if (textContent &&
            (textContent.startsWith('ftp') ||
            textContent.startsWith('https') ||
            textContent.startsWith('http'))) {

            // Create new anchor element
            let link = document.createElement('a');
            link.setAttribute('href', value);
            link.setAttribute('target', 'new');
            link.innerHTML = value;

            // Append it to parent element
            el.appendChild(link);
        } else {
            return value;
        }
    }
}