const { Edlink } = require('@edlink/typescript');

const edlink = new Edlink({
	version: 2,
	client_id: '3a95a779-0ed1-499b-a352-9ea30d0bd5ea',
	client_secret: '[...]',
});

console.log(edlink.loginUrl());