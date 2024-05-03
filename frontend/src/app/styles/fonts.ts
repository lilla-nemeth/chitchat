import localFont from 'next/font/local';

const nunito = localFont({
	src: '../assets/fonts/NunitoRegular.woff2',
	weight: '200',
	style: 'normal',
	display: 'swap',
});

const abrilFatface = localFont({
	src: '../assets/fonts/AbrilFatfaceRegular.woff2',
	weight: '400',
	style: 'normal',
	display: 'swap',
});

export { nunito, abrilFatface };
