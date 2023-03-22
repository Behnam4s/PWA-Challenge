import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const verificationSchema = yup.object().shape({

	firstNumber: yup.string()
		.required('پر کردن فیلد الزامی است')
		.length(1,'در فیلد تنها یک عدد وارد کنید'),

	secondNumber: yup.string()
		.required('پر کردن فیلد الزامی است')
		.length(1,'در فیلد تنها یک عدد وارد کنید'),

	thirdNumber: yup.string()
		.required('پر کردن فیلد الزامی است')
		.length(1,'در فیلد تنها یک عدد وارد کنید'),

	fourthNumber: yup.string()
		.required('پر کردن فیلد الزامی است')
		.length(1,'در فیلد تنها یک عدد وارد کنید'),

});

const verificationResolver = yupResolver(verificationSchema);
export { verificationSchema, verificationResolver };
