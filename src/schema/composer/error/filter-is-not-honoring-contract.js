/**
 * @extends {Error}
 */
class FilterIsNotHonoringContractError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_FILTER_IS_NOT_HONORING_CONTRACT'
  }
}

module.exports = FilterIsNotHonoringContractError
