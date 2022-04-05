package io.gitlab.arturbosch.detekt.rules.style

import io.gitlab.arturbosch.detekt.test.assertThat
import io.gitlab.arturbosch.detekt.test.compileAndLint
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

class UnnecessaryAnnotationUseSiteTargetSpec {

    @Nested
    inner class `UnnecessaryAnnotationUseSiteTarget rule` {

        @Test
        @DisplayName("Unnecessary @param: in a property constructor")
        fun unnecessaryParamInPropertyConstructor() {
            val code = """
                class C(@param:Asdf private val foo: String)

                annotation class Asdf
            """
            assertThat(UnnecessaryAnnotationUseSiteTarget().compileAndLint(code)).hasTextLocations("param:")
        }

        @Test
        @DisplayName("Unnecessary @param: in a constructor")
        fun unnecessaryParamInConstructor() {
            val code = """
                class C(@param:Asdf foo: String)

                annotation class Asdf
            """
            assertThat(UnnecessaryAnnotationUseSiteTarget().compileAndLint(code)).hasTextLocations("param:")
        }

        @Test
        @DisplayName("Necessary @get:")
        fun unnecessaryGet() {
            val code = """
                class C(@get:Asdf private val foo: String)

                annotation class Asdf
            """
            assertThat(UnnecessaryAnnotationUseSiteTarget().compileAndLint(code)).isEmpty()
        }

        @Test
        @DisplayName("Necessary @property:")
        fun necessaryProperty() {
            val code = """
                class C(@property:Asdf private val foo: String)

                annotation class Asdf
            """
            assertThat(UnnecessaryAnnotationUseSiteTarget().compileAndLint(code)).isEmpty()
        }

        @Test
        @DisplayName("Unnecessary @property:")
        fun unnecessaryProperty() {
            val code = """
                class C {
                    @property:Asdf private val foo: String = "bar"
                }

                annotation class Asdf
            """
            assertThat(UnnecessaryAnnotationUseSiteTarget().compileAndLint(code)).hasTextLocations("property:")
        }

        @Test
        @DisplayName("Unnecessary @property: at a top level property")
        fun unnecessaryPropertyAtTopLevel() {
            val code = """
                @property:Asdf private val foo: String = "bar"

                annotation class Asdf
            """
            assertThat(UnnecessaryAnnotationUseSiteTarget().compileAndLint(code)).hasTextLocations("property:")
        }
    }
}
