const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	var demoParamsTitle = [
		{
			title: "JSON CON CONFIGURACION CON TITULO",
			config: {
				text: formulario.link.value,
				width: 240,
				height: 240,

	            //CONFIGURACION TITULO
				title: '#CODIGO', 
				titleFont: "normal normal bold 18px Arial",
				titleColor: "#fff",
				titleBackgroundColor: "#3074B4",
				titleHeight: 40,
				titleTop: 25,
	
				colorDark: "#000000",
				colorLight: "#ffffff",
	
	
				// === Timing Pattern Color
				timing: '#e1622f',
	
				correctLevel: QRCode.CorrectLevel.H, //  L, M, Q, H
	
				
				dotScale: 0.4
			}
	
		}
		,
		{
			title: "JSON + TITULO + SUBTITULO + COLOR + SVG o LOGO",
			config: {
				text: formulario.link.value, // Content
	
				width: 240, // Widht
				height: 240, // Height
				colorDark: "#000000", // Dark color
				colorLight: "#FFFACD", // Light color
				
				// quietZone
				quietZone:0,
	
				// === Title
				title: 'Title', // Title
				titleFont: "normal normal bold 18px Arial", // Title font
				titleColor: "#004284", // Title Color
				titleBackgroundColor: "#fff", // Title Background
				titleHeight: 70, // Title height, include subTitle
				titleTop: 25, // Title draw position(Y coordinate), default is 30
	
	
				// === SubTitle
				subTitle: 'subTitle', // Subtitle content
				subTitleFont: "normal normal normal 14px Arial", // Subtitle font
				subTitleColor: "#004284", // Subtitle color
				subTitleTop: 40, // Subtitle drwa position(Y coordinate), default is 50
	
	
				// === Logo
				logo: "hamburger.png", // LOGO
				//					logo:"TAMBIEN PUEDE IR UNA URL",  
				//					logoWidth:80, 
				//					logoHeight:80,
				logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
				logoBackgroundTransparent: false, // Whether use transparent image, default is false
	
				// === Posotion Pattern(Eye) Color
				PO: '#e1622f', // Global Position Outer color. if not set, the defaut is `colorDark`
				PI: '#aa5b71', // Global Position Inner color. if not set, the defaut is `colorDark`
				//					PO_TL:'', // Position Outer - Top Left 
				PI_TL: '#b7d28d', // Position Inner - Top Left 
				PO_TR: '#aa5b71', // Position Outer - Top Right 
				PI_TR: '#c17e61', // Position Inner - Top Right 
				//					PO_BL:'', // Position Outer - Bottom Left 
				//					PI_BL:'' // Position Inner - Bottom Left 
	
				// === Timing Pattern Color
				//	timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
				timing_H: '#ff6600', // Horizontal timing color
				timing_V: '#cc0033', // Vertical timing color
	
				// === Aligment color
				AI:'#27408B',
				AO:'#7D26CD',
	
				correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
	
				
				dotScale: 0.5,
				
				onRenderingEnd:function(options, dataURL){
					console.info(dataURL);
				},
				
				drawer: 'svg'
			}
	
		}
	
	]
	

	// PUEDES VER LAS DIFERENTES CONFIGURACIONES AHORITA SOLAMENTE SUBI 2
	// EN EL JSON ES 0 o 1 Y SE IMPRIMIRA ACORDE A LO DESCRITO

	/* const QR = new QRCode(contenedorQR,demoParamsTitle[0].config);
	QR.makeCode(demoParamsTitle[0].config.text); */

	const QR = new QRCode(contenedorQR,demoParamsTitle[1].config);
	QR.makeCode(demoParamsTitle[1].config.text);
});
