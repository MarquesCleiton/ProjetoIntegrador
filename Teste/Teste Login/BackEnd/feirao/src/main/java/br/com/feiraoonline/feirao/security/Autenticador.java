package br.com.feiraoonline.feirao.security;

import javax.xml.bind.DatatypeConverter;

import br.com.feiraoonline.feirao.model.Cliente;

public class Autenticador {
	// Prefixo inicial do nosso token
	private static final String PREFIXO = "*FEIRAOONLINE;";

	public static String generateToken(Cliente cliente) {
		// concatena o prefixo com as informações do usuario;
		String str = PREFIXO + cliente.toString();
		// converte para hexadecial

		String token = DatatypeConverter.printHexBinary(str.getBytes());
		return token;
	}

	public static boolean isValid(String token) {
		byte[] vetor = DatatypeConverter.parseHexBinary(token);
		// converte o código hexadecimal de volta para texto
		String novaString = new String(vetor);
		if (novaString.startsWith(PREFIXO)) {
			return true;
		}
		return false;
	}

	public static Cliente getUser(String token) {

		byte[] vetor = DatatypeConverter.parseHexBinary(token);
		// converte o código hexadecimal de volta para texto
		String novaString = new String(vetor);
		String partes[] = novaString.split(";");

		Cliente c = new Cliente();
		c.setIdCliente(Integer.parseInt(partes[1]));
		c.setNome(partes[2]);
		c.setEmail(partes[3]);
		return c;
	}
}
