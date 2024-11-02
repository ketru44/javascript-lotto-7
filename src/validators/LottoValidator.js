class LottoValidator {
  static validateLottoNumbers(numbers) {
    this.checkDuplicateNumber(numbers);
    this.checkSixNumbers(numbers);
    numbers.forEach(number => {
      this.checkEachNumber(number);
    })
  };

  static checkEachNumber(number) {
    this.checkIsNumber(number);
    this.checkNumberRange(number);
    this.checkIsInteger(number);
  }

  static checkSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] : 로또 번호는 6개여야 합니다.");
    }
  }
  static checkDuplicateNumber(numbers) {
    if(numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] : 번호들은 중복될 수 없습니다.");
    }
  }
  static checkNumberRange(number) {
    if(number < 1 || number > 45) {
      throw new Error("[ERROR] : 로또 번호는 1부터 45 사이의 숫자이어야 합니다.");
    }
  }
  static checkIsNumber(number) {
    if(isNaN(number)) {
      throw new Error("[ERROR] : 로또 번호는 숫자가 입력되어야 합니다.");
    }
  }
  static checkIsInteger(number) {
    if(!Number.isInteger(number)) {
      throw new Error("[ERROR] : 로또 번호는 정수이어야 합니다.");
    }
  }
};

export default LottoValidator;