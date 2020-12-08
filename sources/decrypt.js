
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
		return value
	}

	/**
	 *
	 */

	if (value.constructor === Array) {
		return value
	}

	/**
	 *
	 */

	const iv = Buffer.from(value.substr(0, 16), "base64")
	const cipher = crypto.createDecipheriv("aes256", key, iv)

	/**
	 *
	 */

	const decoded = `${cipher.update(value.substr(16), "base64", "utf8")}${cipher.final("utf8")}`

	/**
	 *
	 */

	try {
		return JSON.parse(decoded)
	} catch (error) {
		return decoded
	}

}
