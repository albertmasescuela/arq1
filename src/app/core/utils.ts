import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { isValidDate, dateToCadExt } from './utils/utils';
@Injectable()
export class UtilsService {
  constructor(/*private translate: TranslateService*/) {}

  twoDigits(cad: string): string {
    if (cad.toString().length === 1) {
      cad = '0' + cad;
    }
    return cad;
  }

  convertFechaHora(fecha: Date, hora: Date): string {
    const cad = `${fecha.getFullYear()}${this.twoDigits(
      (fecha.getMonth() + 1).toString()
    )}${this.twoDigits(fecha.getDate().toString())}${this.twoDigits(
      hora.getHours().toString()
    )}${this.twoDigits(hora.getMinutes().toString())}`;
    return cad;
  }

  //   translateError(error: HttpErrorResponse): string {
  //     let descError: string;
  //     if (error.status !== 400) {
  //       const err = error.status;
  //       this.translate.get('ERROR.' + err).subscribe(data => {
  //         descError = data;
  //       });
  //       return `${error.status} --> ${descError} :: ${error.url}`;
  //     } else {
  //       if (error.error.errors) {
  //         const err = error.error.errors[0];

  //         this.translate.get('ERROR.' + err.codigoError).subscribe(data => {
  //           descError = data;
  //         });

  //         return `:: ${descError}`;
  //       } else return '';
  //     }
  //   }

  validateEmail(c: FormControl) {
    if (c.value === null || c.value === '') {
      return null;
    }
    const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

    return EMAIL_REGEXP.test(c.value)
      ? null
      : {
          validateEmail: {
            valid: false
          }
        };
  }

  validateDate(c: FormControl) {
    if (c.value === null || c.value === '') {
      return null;
    }
    return isValidDate(dateToCadExt(c.value)) ? null : { date: true };
  }

  validatePhone(c: FormControl) {
    if (c.value === null || c.value === '') {
      return null;
    }
    const PHONE_REGEXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;
    return PHONE_REGEXP.test(c.value)
      ? null
      : {
          validatePhone: {
            valid: false
          }
        };
  }

  validateNifCif(c: FormControl) {
    if (c.value === null || c.value === '') {
      return null;
    }

    const DNI_REGEX = /^(\d{8})([A-Z])$/;
    const CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
    const ret =
      DNI_REGEX.test(c.value.toUpperCase()) ||
      CIF_REGEX.test(c.value.toUpperCase()) ||
      NIE_REGEX.test(c.value.toUpperCase());
    return ret
      ? null
      : {
          validateNifCif: {
            valid: false
          }
        };
  }
}
