import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static invalidReactiveForm(control: FormControl) : { [s: string]: boolean  } | null {
        if (control.value === 'Test') {
            return { invalidProjectName: true }
        }

        return null;
    }

    static asyncInvalidReactiveForm(control: FormControl) : Promise<any> | Observable<any> {
        const promise =  new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Test Project') {
                    resolve({ invalidProjectName: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        })

        return promise;
    }
}