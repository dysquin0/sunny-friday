# SUNNY FRIDAY INSTALLATION PROCEDURE - GUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Getting Started

## Environment Set up

### What are needed?

Please install the following properly:

- LTS version of [Node JS](https://nodejs.org/en/) with latest Version of NPM

- [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2

## Installation of GUI Dependencies

1. Unpack the Sunny Friday source code (sunny-friday.zip) to any preferred directory
1. Install the node dependencies
   ```
       npm install
   ```

## Build the Angular application

1. Run the command below
   ```
         npm run build
   ```
1. This will generate directory
   ```
       ~/sunny-friday/dist/sunny-friday
   ```
1. Please take note of the absolute path generated directory.

## Development server

Run `ng serve` at the directory for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Data source per page

### HOME - src\app\pages\home\home.component.ts

    - Our Services Section - src\app\pages\home\components\our-services-block\our-services-block.component.ts
    - Our Projects Section - src\app\pages\home\components\our-projects\our-projects.component.ts

### ABOUT US - src\app\pages\about-us\about-us.component.ts

    - About Us Section - src\app\pages\about-us\components\about-us-section\about-us-section.component.ts
    - Meet the Team Section - src\app\pages\about-us\components\about-us-section\about-us-section.component.ts
    - Our Values Section - src\app\pages\about-us\components\our-values\our-values.component.ts

### CONTACT US - src\app\pages\contact-us\contact-us.component.ts

    - Find Us Section - src\app\pages\contact-us\components\find-us\find-us.component.ts
    - Message Us Section - src\app\pages\contact-us\components\message-us\message-us.component.ts

### OUR SERVICES - src\app\pages\our-services\our-services.component.ts

### OUR PROJECTS - src\app\pages\our-projects\our-projects.component.ts

### WORK WITH US - src\app\pages\work-with-us\work-with-us.component.ts

## Asset directory

```
    ~/sunny-friday/src/assets
```

## Application translation

1. Translation dictionary is located in `src\assets\translation\i18n.ts`.

1. Dictionary contains navigation, common components, and set of pages.
   - Navigation - contains translation for header menu such as home, our services, about us and work with us.
   - Common - contains translations for components such as contact us button, etc.
   - Pages - contains translation for pages divided per component

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
