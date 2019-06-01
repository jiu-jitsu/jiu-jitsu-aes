
/**
 *
 */

const crypto = require(`crypto`)

/**
 *
 */

module.exports = (message, options) => {

	/**
	 *
	 */

	if (!message) {
		return message
	}

	/**
	 *
	 */

	if (message.constructor === Object) {
		message = JSON.stringify(message)
	}

	/**
	 *
	 */

	if (message.constructor === Array) {
		message = JSON.stringify(message)
	}

	/**
	 *
	 */

	const key = options.key
	const iv = crypto.randomBytes(16)
	const cipher = crypto.createCipheriv(`aes256`, key, iv)

	/**
	 *
	 */

	return `${iv.toString(`base64`)}${cipher.update(message, `utf8`, `base64`)}${cipher.final(`base64`)}`

}
