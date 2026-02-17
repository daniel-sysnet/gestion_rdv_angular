# 🏥 Gestion RDV - Application de Gestion des Rendez-vous Médicaux

![Angular](https://img.shields.io/badge/Angular-19.2.0-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Vue d'ensemble

**Gestion RDV** est une application web moderne construite avec **Angular 19** permettant de gérer les rendez-vous médicaux. Elle fournit une interface intuitive pour les patients et les professionnels de santé pour :

- ✅ Créer et gérer des rendez-vous
- ✅ Soumettre des demandes de rendez-vous
- ✅ Consulter l'historique des rendez-vous
- ✅ Gérer les dossiers médicaux
- ✅ Authentification sécurisée avec contrôle d'accès
- ✅ Filtrage et pagination des données

## 🚀 Fonctionnalités principales

### 🔐 Authentification & Sécurité
- **Service Security** : Gestion complète de l'authentification avec localStorage
- **Guards de route** : Protection des routes privées avec `isConnectGuard`
- **Rôles utilisateurs** : Support de 4 rôles (PATIENT, MEDECIN, SECRETAIRE, ADMIN)
- **Gestion de session** : Login/Logout avec stockage du token et données utilisateur

### 📅 Gestion des Rendez-vous
- **Dashboard** : Tableau de bord avec vue d'ensemble du patient
- **Mes RV** : Liste complète des rendez-vous avec filtrage et détails
- **Détail RV** : Vue détaillée d'un rendez-vous avec statut (Confirmé, Réalisé, Annulé)
- **Demandes RV** : Soumission et suivi des demandes de rendez-vous
- **Formulaire de demande** : Formulaire structuré pour créer une nouvelle demande

### 👥 Gestion des Patients
- **Création de patient** : Formulaire pour enregistrer nouveaux patients
- **Dossier médical** : Accès aux dossiers médicaux des patients connectés

### 📊 Interface Utilisateur
- **Design responsive** : Utilisation de Bootstrap 5.3.8
- **Icônes Bootstrap** : Icons professionnels avec bootstrap-icons 1.13.1
- **Navigation intuitive** : Menu de navigation avec gestion des rôles
- **Pagination** : Pagination intelligente des listes de données
- **Filtrage** : Filtrage par spécialité, statut et autres critères

## 🛠️ Stack Technologique

### Frontend
- **Angular 19.2.0** - Framework frontend moderne avec standalone components
- **TypeScript 5.7.2** - Langage de programmation typé
- **Bootstrap 5.3.8** - Framework CSS pour design responsive
- **Bootstrap Icons 1.13.1** - Librairie d'icônes
- **RxJS 7.8.0** - Programmation réactive

### Développement
- **Angular CLI 19.2.19** - Outil de développement Angular
- **Vite** - Bundler moderne et rapide
- **Karma** - Test runner pour les tests unitaires
- **Jasmine** - Framework de test
- **Node.js & npm** - Gestionnaire de paquets

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v18+) : [Télécharger ici](https://nodejs.org/)
- **Angular CLI** (v19+) : Installez avec `npm install -g @angular/cli`
- **Git** : Pour cloner le dépôt

## 📥 Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/daniel-sysnet/gestion_rdv_angular.git
cd gestion_rdv_angular
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Vérifier l'installation
```bash
ng version
```

## 🏃 Utilisation

### Démarrer le serveur de développement
```bash
npm start
# ou
ng serve --hmr
```

L'application sera accessible sur : **http://localhost:4200/**

Le mode HMR (Hot Module Replacement) est activé, les modifications seront automatiquement rechargées.

### Construire pour la production
```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`.

### Servir en mode production
```bash
ng serve --configuration production
```

### Lancer les tests
```bash
npm test
```

## 🔐 Authentification

### Utilisateurs de test disponibles

L'application utilise des mocks pour l'authentification (production nécessiterait une API backend).

**Identifiants de test :**

| Email | Mot de passe | Rôle | Nom |
|-------|-------------|------|-----|
| aliou.sall@example.com | test123 | PATIENT | Aliou Sall |
| aïssatou.ba@example.com | test123 | MEDECIN | Aïssatou Ba |
| fatou.ndiaye@example.com | test123 | SECRETAIRE | Fatou Ndiaye |
| bamba.cisse@example.com | test123 | ADMIN | Bamba Cissé |
| marie.sarr@example.com | test123 | PATIENT | Marie Sarr |
| ousmane.diop@example.com | test123 | MEDECIN | Ousmane Diop |

### Flux d'authentification

1. **Login** : Utilisateur entre email et mot de passe
2. **Vérification** : `Security.login()` valide les identifiants
3. **Stockage** : Token et données utilisateur stockés dans localStorage
4. **Protection** : Routes privées protégées par `isConnectGuard`
5. **Accès** : Utilisateur rediririgé vers le dashboard après connexion

## 📂 Structure du Projet

```
src/
├── app/
│   ├── core/                          # Services et guards centralisés
│   │   ├── guards/
│   │   │   ├── is-connect-guard.ts    # Protection des routes privées
│   │   │   └── is-connect-guard.spec.ts
│   │   ├── models/
│   │   │   └── user.model.ts          # Interfaces User, UserRole
│   │   └── services/
│   │       ├── security.ts            # Service d'authentification
│   │       └── security.spec.ts
│   │
│   ├── features/                      # Fonctionnalités métier
│   │   ├── public/                    # Routes publiques (sans auth)
│   │   │   ├── login/                 # Page de connexion
│   │   │   └── create-patient/        # Création de patient
│   │   │
│   │   └── private/                   # Routes privées (protégées)
│   │       ├── dashboard/             # Tableau de bord principal
│   │       ├── demande-rv/            # Gestion des demandes de RV
│   │       │   ├── form-demande/      # Formulaire de demande
│   │       │   ├── list-demande/      # Liste des demandes
│   │       │   ├── models/            # Modèles (DemandeListeRVModel)
│   │       │   └── services/          # Services (DemandeService)
│   │       ├── rv/                    # Gestion des rendez-vous
│   │       │   ├── detail-rv/         # Détail d'un RV
│   │       │   ├── models/            # Modèles RV (RendezVousModel)
│   │       │   └── services/          # Services RV (RvService)
│   │       └── dossier-medical/       # Dossier médical du patient
│   │
│   ├── layouts/                       # Composants de layout
│   │   ├── private/
│   │   │   └── header/                # En-tête zone privée (logout)
│   │   └── public/
│   │       └── header-public/         # En-tête zone publique
│   │
│   ├── mocks/                         # Données fictives pour tests
│   │   ├── user.mock.ts               # 12 utilisateurs de test
│   │   ├── rv.mock.ts                 # 10 rendez-vous tests
│   │   ├── demande.mock.ts            # Demandes de RV tests
│   │   └── index.ts                   # Exports centralisés
│   │
│   ├── app.ts                         # Composant principal
│   ├── app.routes.ts                  # Configuration des routes
│   ├── app.config.ts                  # Configuration Angular
│   └── app.html                       # Template principal
│
├── styles.css                         # Styles globaux
├── index.html                         # Fichier HTML principal
├── main.ts                            # Point d'entrée
│
├── tsconfig.json                      # Configuration TypeScript (avec @mocks alias)
├── package.json                       # Dépendances npm
└── angular.json                       # Configuration Angular
```

## 🔄 Flux des Routes

### Routes Publiques (Accessibles sans authentification)
```
/public/login                 → Page de connexion
/public/create-patient        → Créer un nouveau compte patient
```

### Routes Privées (Protégées par isConnectGuard)
```
/private/dash                 → Tableau de bord (page d'accueil)
/private/rv                   → Liste de mes rendez-vous
/private/rv/detail/:id        → Détails d'un rendez-vous
/private/demande-rv           → Mes demandes de RV
/private/form-demande         → Formulaire pour nouvelle demande
/private/patient/dossier      → Mon dossier médical
```

## 🔌 Services Principaux

### Security Service
```typescript
// Autentification
login(request: UserLoginRequest): UserLoginResponse | null
logout(): void

// Gestion de session
getCurrentUser(): UserLoginResponse | null
isAuthenticated(): boolean
```

### RvService
```typescript
// Récupération et filtrage des RV
getRendezVous(filtre: RvFilterModel): RvListeResponse
```

### DemandeService
```typescript
// Récupération et filtrage des demandes
getDemandeRV(filtre: DemandeRVFilterModel): DemandeListeResponse
```

## 📋 Modèles de Données

### User & Authentication
```typescript
interface User {
  id: number
  email: string
  password: string
  role: UserRole  // 'PATIENT' | 'MEDECIN' | 'SECRETAIRE' | 'ADMIN'
  fullName?: string
}

interface UserLoginRequest {
  email: string
  password: string
}

interface UserLoginResponse {
  token?: string
  user: User
}
```

### Rendez-vous
```typescript
interface RendezVousModel {
  id: number
  dateHeure: string
  type: RvType  // 'Consultation' | 'Suivi' | 'Urgence'
  medecin: string
  statut: RvStatut  // 'Confirmé' | 'Réalisé' | 'Annulé'
}
```

### Demande de RV
```typescript
interface DemandeListeRVModel {
  id: number
  dateDemande: string
  statut: string  // 'En attente' | 'Accepté' | 'Refusé'
  specialite: string
  heure: string
}
```

## 🧪 Développement & Contribution

### Créer une nouvelle route privée

1. **Créer le composant**
```bash
ng generate component features/private/ma-feature
```

2. **Ajouter la route dans `app.routes.ts`**
```typescript
{ 
  path: 'ma-feature', 
  component: MaFeature,
  canActivate: [isConnectGuard]
}
```

3. **Ajouter le lien dans le menu** (`layouts/private/header/header.html`)

### Ajouter un nouveau utilisateur de test
Modifier `src/app/mocks/user.mock.ts` :
```typescript
{
  id: 13,
  email: "nouveau.user@example.com",
  password: "test123",
  role: "PATIENT",
  fullName: "Nouveau User"
}
```

### Implémenter une vraie API
Remplacer les mocks par des appels HTTP dans les services :
```typescript
constructor(private http: HttpClient) {}

getRendezVous(filtre: RvFilterModel): Observable<RvListeResponse> {
  return this.http.post('/api/rendez-vous/list', filtre)
}
```

## 📊 Alias TypeScript

Le projet utilise un alias `@mocks` pour les imports des mocks :
```typescript
// Au lieu de :
import { MOCK_USERS } from '../../../mocks/user.mock'

// Utilisez :
import { MOCK_USERS } from '@mocks'
```

Configuré dans `tsconfig.json` :
```json
{
  "paths": {
    "@mocks": ["src/app/mocks/index.ts"]
  }
}
```

## 🐛 Dépannage

### Erreur : "Cannot find module '@mocks'"
- Vérifier que le path alias est configuré dans `tsconfig.json`
- Redémarrer le serveur développement

### Erreur : "EPERM: operation not permitted"
- Nettoyer le cache Angular : `rm -r .angular/cache`
- Relancer : `ng serve --hmr`

### Erreur : "Unable to initialize JavaScript cache storage"
- Warning sans impact, la compilation continue

### Les changements ne s'appliquent pas en même temps que le code
- C'est normal avec HMR, rafraîchir la page si nécessaire

## 📚 Ressources

- [Documentation Angular](https://angular.dev)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

## 🎯 Progression du Projet

- [x] **Livrable 1** : Structure de base et routage
- [x] **Livrable 2** : Mise à jour des routes et intégration des pages
- [x] **Livrable 3** : Filtrage, pagination et Two-Way Data Binding
- [x] **Livrable 4** : Authentification et gestion de sécurité (actuel)

## 📝 Licence

MIT License - © 2026 Gestion RDV Application

## 👨‍💻 Auteur

**Daniel Sysnet**
- GitHub : [daniel-sysnet](https://github.com/daniel-sysnet)
- Email : contactez-moi via GitHub

---

**Dernière mise à jour** : 17 Février 2026
**Branche** : livrable-cours-4
**Version Angular** : 19.2.0
**Version TypeScript** : 5.7.2
