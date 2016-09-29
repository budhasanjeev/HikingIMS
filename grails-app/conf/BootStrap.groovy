import hims.Hiker
import hims.Role
import hims.User
import hims.UserRole

class BootStrap {

    def init = { servletContext ->

        //Creating Admin Role
        User admin = User.findById('1')?:new User(username:'admin',password:'admin',enabled:true).save(flush: true,failOnError: true)
        Role adminRole = Role.findById('1')?:new Role(authority:'ROLE_ADMIN').save(flush: true, failOnError: true)


        UserRole.create(admin,adminRole)

        Hiker adminHiker = Hiker.findById(1)?:new Hiker(firstName:'admin',lastName:'admin',mobileNumber:'9999999999',phoneNumber:'010101010',emailAddress:'admin@gmail.com',address:'admin',foodPreferences:'Vegeterian',isTerminated:false,isInHiker:false,user:admin).save(flush: true,failOnError: true)

        //Creating Editor Role
        User editor = User.findById('2')?:new User(username: 'editor',password: 'editor',enabled: true).save(flush: true,failOnError: true)
        Role editorRole = Role.findById('2')?:new Role(authority: 'ROLE_EDITOR').save(flush: true, failOnError: true)

        UserRole.create(editor, editorRole)

        //Creating Student Role
        User student = User.findById('3')?:new User(username: 'student',password: 'student',enabled: true).save(flush: true,failOnError: true)
        Role studenRole = Role.findById('3')?:new Role(authority: 'ROLE_STUDENT').save(flush: true, failOnError: true)
        Hiker studentHiker = Hiker.findById(2)?:new Hiker(firstName:'student',lastName:'student',mobileNumber:'9841423121',phoneNumber:'010101010',emailAddress:'student@gmail.com',address:'student',foodPreferences:'Vegeterian',isTerminated:false,isInHiker:false,user:student).save(flush: true,failOnError: true)

        UserRole.create(student, studenRole)

        //Creating folder to store Bills
        new File("Bills").mkdir()

    }
    def destroy = {
    }
}
