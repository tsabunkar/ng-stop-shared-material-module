Reference:

https://indepth.dev/stop-using-shared-material-module/
https://www.npmjs.com/package/webpack-bundle-analyzer

---

# Steps

- install npm i -D webpack-bundle-analyzer
- "analyze": "ng build --prod --stats-json && webpack-bundle-analyzer ./dist/<proj_name>/stats-es2015.json"
- ng add @angular/material
- ng g m employee --routing --module app
- ng g c employee --export true
- ng g m department --routing --module app
- ng g c department --export true
- AGAIN run : npm run analyze
- Add material code to department and employee
- ng g m shared/material --flat true
- ng g m shared/shared --flat true
- export material module and import into shared module
- export materialmdoule in exports[] inside sharedmodule
- import SharedModule in deparment and employee modules
- AGAIN run : npm run analyze
- Size got increased from 423kb --> 641kb [check images in src/assets/first-size.png & second-size.png]

---

# lazy loading

- remove EmployeeModule and DepartmentModule from app.module.ts
- lazy loading those module in app-routing.module.ts
- add roters in app template
- size got increase to 707kb [ third-size.png]

---

# Remove the Shared Material module and import only the modules which are needed to Feature Module

- Remove SharedModule in all the feature module EmployeeModule and DepartmentModule
- Add directly the material modules used by these feature module
- size got decrease to 673kb [ fourth-size.png]
