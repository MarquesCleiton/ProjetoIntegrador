package br.com.feiraoonline.feirao.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.feiraoonline.feirao.email.EnviaEmailTLS;
import br.com.feiraoonline.feirao.email.Mensagem;

@RestController
@CrossOrigin("*")
public class EmailController {
	
	@PostMapping("/contato/email")
	public ResponseEntity<Mensagem> enviaEmail(@RequestBody Mensagem msg){
		if (EnviaEmailTLS.sendEmail(msg)) {
			return ResponseEntity.ok(msg);
		}
		return ResponseEntity.badRequest().build();
	}
}