class CreditCard
  constructor: (number) ->
    @number = number.replace(/[ -]/, '')

@CreditCard = CreditCard