package com.cariocadevs.ecad.challenge.utils;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class ToStringBuilder {
    public static final Collection<String> EXCLUDE_FIELD_NAMES = Collections.unmodifiableList(Arrays.asList("pin", "password", "newPassword", "cvv", "cardKey", "encKey", "encPaymentData", "encryptionKey", "publicKey", "privateKey", "fingerprintKey", "accessToken", "file", "sessionId"));

    public ToStringBuilder() {
    }

    public static String toString(Object object, Collection<String> excludeFieldNames) {
        return toString(object, (String[])excludeFieldNames.toArray(new String[excludeFieldNames.size()]));
    }

    public static String toString(Object object, String... excludeFieldNames) {
        try {
            return (new ReflectionToStringBuilder(object, ToStringStyle.JSON_STYLE)).setExcludeFieldNames(excludeFieldNames).toString();
        } catch (StackOverflowError var3) {
            return null;
        }
    }

    public static String toString(Object object) {
        try {
            return org.apache.commons.lang3.builder.ToStringBuilder.reflectionToString(object, ToStringStyle.JSON_STYLE);
        } catch (StackOverflowError var2) {
            return null;
        }
    }
}

