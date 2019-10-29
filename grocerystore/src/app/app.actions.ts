import { Action } from '@ngrx/store';

export const CUSTOMER = 'CUSTOMER';

export class AppActions implements Action {
    type: string;
    payload?: any;
}
