/**
 * @extends {Error}
 */
class ValidatorIsNotHonoringContractError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_VALIDATOR_IS_NOT_HONORING_CONTRACT'
  }
}

module.exports = ValidatorIsNotHonoringContractError
