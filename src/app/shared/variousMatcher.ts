import { AbstractControl, FormControl } from '@angular/forms';
// import * as moment from 'moment/moment';

export const emailMatcher = (control: AbstractControl): { [key: string]: boolean } => {
	const email = control.get('email');
	const confirm = control.get('confirm');
	if (!email || !confirm) {
		return null;
	}
	return email.value === confirm.value ? null : { nomatch: true };
};

export const passwordMatcher = (control: AbstractControl): { [key: string]: boolean } => {
	const contraNueva = control.get('contraNueva');
	const contraNuevaRepetida = control.get('contraNuevaRepetida');
	if (!contraNueva || !contraNuevaRepetida) {
		return null;
	}
	return contraNueva.value === contraNuevaRepetida.value ? null : { nomatch: true };
};

// export const dateMatcher = (control: AbstractControl): { [key: string]: boolean } => {
// 	const fechaIni = control.get('fechaIni');
// 	let fechaFin = control.get('fechaFin');
// 	let fechaHora = moment(fechaFin.value, 'HH:mm').format('HH:mm');
// 	if (fechaHora !== '00:00') {
// 		return fechaIni.value < fechaFin.value ? null : { nomatch: true };
// 	} else {
// 		//return fechaIni.value > fechaFin.value ? null : { nomatch: true };
// 		let fecha = fechaFin.value;
// 		let fechaFinNew = moment(fecha)
// 			.add(1, 'days')
// 			.toDate();
// 		if (fechaFinNew >= fechaIni.value) {
// 			return null;
// 		} else {
// 			return { nomatch: true };
// 		}
// 		//return fechaFin.value >= fechaIni.value ? null : { nomatch: true };
// 	}
// };

// export const dateMatcherRango = (control: FormControl): { [key: string]: boolean } => {
// 	const fechaIni = control.value[0];
// 	const fechaFin = control.value[1];
// 	const torna: any = moment(fechaFin).diff(fechaIni, 'months', true);
// 	if (torna > 1) {
// 		return { nomatch: true };
// 	}
// 	return null;
// };

export const DobleMatcher = (control: AbstractControl): { [key: string]: boolean } => {
	const dobleIni = control.get('dobleMovIni');
	const dobleMov = control.get('dobleMovFin');
	// if (!contraNueva || !contraNuevaRepetida) {
	//   return null;
	// }
	return dobleIni.value >= dobleMov.value ? null : { nomatch: true };
};
