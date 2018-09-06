
/**
 * Pour déclarer une classe comme composant de
 * notre application, on importe "Component" via
 * @angular/core
 */
import { Component } from '@angular/core';
import {Contact} from "./shared/models/contact";



/**
 * @Component est ce qu'on appel un décorateur.
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>;
   * Vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',
  // template: `
  //   <h1>{{ title }}</h1>
  // `,
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h1 { color: red; }
  // `]
})
/**
 * La classe contient les données du composant,
 * mais aussi, son comportement (Ce qu'il fait).
 */
export class AppComponent {

  // -- Déclaration d'une variable
  title = 'Gestion de Contacts';

  // -- Contact Actif;
  contactActif: Contact;

  // -- Déclaration d'un Objet
  unContact: Contact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugo liegeard',
    email: 'hugo.liegeard@lepoles.org'
  };

  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    {
      id: 1894165,
      name: 'Hugo LIEGEARD',
      username: 'hugo liegeard',
      email: 'hugo.liegeard@lepoles.org'
    },
    {
      id: 2651489,
      name: 'Luc JOINVIL',
      username: 'luc joinvil',
      email: 'luc.joinvil@lepoles.org'
    },
    {
      id: 6819813,
      name: 'Alpha DIALLO',
      username: 'alpha diallo',
      email: 'alpha.diallo@lepoles.org'
    },
    {
      id: 4545441,
      name: 'Layla LAHCENE',
      username: 'layla lahcene',
      email: 'layla.lahcene@lepoles.org'
    }
  ];

  /**
   * Affiche le contact cliqué par l'utilisateur
   * @param contactCliqueParMonUtilisateur
   */
  showContact(contactCliqueParMonUtilisateur: Contact) {
    this.contactActif = contactCliqueParMonUtilisateur;
  }

  ddContactToArray(nouveauContact: Contact) {
    //--Ajout du contact dans le tableau
    this.mesContacts.push(nouveauContact);
  }
}
