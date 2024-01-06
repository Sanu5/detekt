package io.gitlab.arturbosch.detekt.core.config

import io.gitlab.arturbosch.detekt.test.yamlConfig
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class DisabledAutoCorrectConfigSpec {
    private val rulesetId = "style"
    private val config = yamlConfig("/configs/single-rule-in-style-ruleset.yml")

    @Test
    fun `parent path is derived from wrapped config`() {
        val subject = DisabledAutoCorrectConfig(config.subConfig(rulesetId))
        val actual = subject.parentPath
        assertThat(actual).isEqualTo(rulesetId)
    }

    @Test
    fun `parent returns the parent instance`() {
        val subject = DisabledAutoCorrectConfig(config)
        val actual = subject.subConfig(rulesetId).parent
        assertThat(actual).isEqualTo(subject)
    }
}