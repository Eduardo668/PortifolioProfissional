package br.com.eduardoportifolio.util;

import com.auth0.jwt.algorithms.Algorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.core.env.Environment;

@RequiredArgsConstructor
public final class AlgorithmUtil {

    private final Environment environment;

    public Algorithm defineAlgorithm() throws NullPointerException{
        String secret = environment.getProperty("secret.key");

        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());

        return algorithm;
    }


}
