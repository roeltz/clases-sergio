<?php

$content = file_get_contents("php://input");
$xml = new DOMDocument();
$xml->loadXML($content);
$xpath = new DOMXPath($xml);
$attributeNodes = $xpath->query("//saml:Attribute");
$data = [];

foreach ($attributeNodes as $node) {
	$name = $node->attributes->getNamedItem("Name")->textContent;
	$valueNodes = $xpath->query("saml:AttributeValue", $node);
	$value = $valueNodes->item(0)->textContent;
	$data[$name] = $value;
}

print_r($data);