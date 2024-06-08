
export class HelperMethods {

  static EMAIL_REGIX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  static SearchInAllKeysInArray(searchPara: any, ArrayToSearch: any[]) {
    return ArrayToSearch.filter((item) => {
      return Object.keys(item).some((key) => {
        return (item[key] + '').toUpperCase().indexOf(searchPara.toUpperCase()) !== -1;
      });
    });
  }
  


  static toUpperFirst(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  static toLowerFirst(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  static emailvalidations(emails: string): boolean {
    if (emails.length > 0 && (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/.test(emails))) {
      return true
    } else {
      return false
    }
  }

  static isValidEmail(email: string) {
    return this.EMAIL_REGIX.test(email)
  }

}


