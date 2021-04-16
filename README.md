# Vaxx Frontend

## Documentation 

### `/src` Folder Structure

- `/components` concerns any and all components that are not wired into the App's state. They may hold internal state of their own (ie, a form). Don't place any components in there wired into an overarching app/global state.
   - `/atoms`: Atoms are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.
   - `/molecules`: Molecules are collections of atoms that form relatively simple UI components.
   - `/organisms`: Organisms are relatively complex components that form discrete sections of an interface.
- `/templates` Templates place components within a layout and demonstrate the design’s underlying content structure.
- `/state`: React Context(s)
- `/containers`: Components that are wired to the app state
- `/utils`: Any and all utility functions.

### File (Folder) Naming Convention

We will be using `kebab-case` for all filenames. This is to ensure that this repo is cross-compatible between Windows, Linux, and OSX. 

### JS(X) Naming Convention

`PascalCase` for all React Components.

`camelCase` for all other Javascript

### Types or Interfaces for PropTypes? 

Use types. Here's an example: 

```typescript 

type ComponentProps = {
    foo: string,
    bar: number
};

const Component: React.FC<ComponentProps> = ({foo, bar}) => <div>{foo}{bar}</div>;

```

## Tabs or Spaces?

Set your tab to insert 2 spaces on your text editor.

### Should I use `any` in type?

As a rule of thumb: no. We will turn away most PRs using an `any`. If you feel like you need to use `any`, here's what you can do: 
1. Ask in discord if there is a way to solve around the `any`
2. Leave a comment describing why `any` was used before submitting your PR.

### Atomic Design Methodology

Splitting up all **stateless** react components into the relevant folder related to the UI's concerns.

### Links 
* [Tailwind CSS](https://tailwindcss.com/docs)
* [NextJS](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [SASS](https://sass-lang.com/documentation)
* [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)


## Privacy/ Trust, PII

This isn't designed to ingest personally identifiable information (PII); by requesting birth year, and the first 3 digits of the user's postal code, we should be free of any PIPEDA or PII issues.

### Why First 3 Digits of Postal Code

It frankly, would be easier for users to enter their address if they don't remember their postal code, or first three digits; however unless we can get access somehow to Canada Post's location API, it might be safer to have users explicity state what postal code they're looking for. Alternatives to Canada Post (i.e. Google) can return potentially incorrect postal codes for addresses for new constructions and that can prevent users from finding valid vaccination sites.

### Functional MVP (TODO: AODA)

The tl;dr of the functionality this should have:

1. User to enter birth year _and_ first three digits of their postal code, submit
2. If the above are submitted, POST to an API, get a list of registration links, render list of links
3. Language dropdown (EN/FR, maybe more?)

## To Do

======

Follow the project plan: https://docs.google.com/document/d/1TBWPG63CScyJOjs8T86K0Hzc8az5__72A2jkJANI8Z4/edit

### Objective:

The objective of this project is to gather info on local clinics distributing Vaccines, primarily focusing on 55+.

**Internally:** We are creating a way to view vaccine availability at clinics across Canada.

**Externally:** Communicating the vaccine availability slots at clinics via twitter.

Big idea: twitter followers see slots available

### Overarching Product-related Goals:

1. Display vaccine appointment availability summary (including link to book)
2. Group Regional Availabilities
3. Ask user for relevant information
   a. Phase 1: 55+ 1. Clearly displays:
   a. appointment locations
   b. dates (if applicable)
   c. separates providers with confirmed appointments from unconfirmed appointments 2. Focus appointments at:
   a. Pharmacies
   b. Hotspot Clinics
   c. Hotspot popups
   d. Popups/Clinics for some phase 1 & phase 2 communities (ie, MHC indigenous clinic) 3. Information collected:
   a. Age
   b. Postal Code
   c. Phase 1 & 2 community checkboxes
   b. Phase 2: Everyone 1. Focus on appointments at
   a. Phase 1 targets
   b. Hospitals & Mass vaccination clinics
   c. Any alternative, human-inputted source 2. Information collected:
   a. Phase 1 Information
   b. Health conditions
   c. Occupation
   d. Anything else relevant to future rollout eligibility
4. A clear UI. No muss, no fuss.

### Work:

#### Equity Work:

- [ ] Implement Multilingual Support (does Next's i18n cut it? investigate)
      a. https://nextjs.org/docs/advanced-features/i18n-routing
- [ ] Investigate whether we need to support IE11
- [ ] Establish accessibility compliance goals
  - Descriptive Buttons/links (non symbolic)
  - Low stimulus colour palette
  - Alternative to postal code for unhoused individuals

#### UI Work

- [ ] Form: Age / Postal Code / Checklist

#### Testing

- [ ] Implement Jest
- [ ] Implement PlayWright
- [ ] Add [husky](https://www.npmjs.com/package/husky) for pre-commit hooks (build/lint)
- [ ] Add additional strictness to linting rules
