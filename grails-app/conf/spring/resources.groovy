import org.springframework.cache.ehcache.EhCacheManagerFactoryBean

// Place your Spring DSL code here
beans = {
    aclCacheManager(EhCacheManagerFactoryBean) {
        cacheManagerName = 'spring-security-acl-cache-' + UUID.randomUUID()
    }
}
