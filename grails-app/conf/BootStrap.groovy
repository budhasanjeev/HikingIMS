import hims.Role
import hims.User
import hims.UserRole

class BootStrap {

    def init = { servletContext ->

        //Creating Admin Role
        User admin = User.findById('1')?:new User(username:'admin',password:'admin',enabled:true).save(flush: true,failOnError: true)
        Role adminRole = Role.findById('1')?:new Role(authority:'ROLE_ADMIN').save(flush: true, failOnError: true)

        UserRole.create(admin,adminRole)

        //Creating Editor Role
        User editor = User.findById('2')?:new User(username: 'editor',password: 'editor',enabled: true).save(flush: true,failOnError: true)
        Role editorRole = Role.findById('2')?:new Role(authority: 'ROLE_EDITOR').save(flush: true, failOnError: true)

        UserRole.create(editor, editorRole)

        //Creating folder to store Bills
        new File("Bills").mkdir()

    }
    def destroy = {
    }
}
