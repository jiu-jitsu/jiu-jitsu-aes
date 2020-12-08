
/**
 *
 */

const crypto = require("crypto")

/**
 *
 */

module.exports = async (value, key) => {

	/**
	 *
	 */

	if (!value) {
		return value
	}

	/**
	 *
	 */

	if (value.constructor === Object) {
		value = JSON.stringify(value)
	}

	/**
	 *
	 */

	if (value.constructor === Array) {
		value = JSON.stringify(value)
	}

	/**
	 *
	 */

	const iv = crypto.randomBytes(16)
	const cipher = crypto.createCipheriv("aes256", key, iv)

	/**
	 *
	 */

	return `${iv.toString("base64")}${cipher.update(value, "utf8", "base64")}${cipher.final("base64")}`

}
