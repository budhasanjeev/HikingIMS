package hims


class Hiker {

    String firstName
    String middleName
    String lastName
    String mobileNumber
    String phoneNumber
    String emailAddress
    String rollNumber
    String address
    String foodPreferences
    Batch batch


    static constraints = {
        firstName(nullable: false)
        middleName(nullable: true)
        lastName(nullable: false)
        mobileNumber(nullable: false)
        phoneNumber(nullable: false)
        emailAddress(nullable: false)
        rollNumber(nullable: false)
        address(nullable: false)
        foodPreferences(nullable: false)

    }
}
