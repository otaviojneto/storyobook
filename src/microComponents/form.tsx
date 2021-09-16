{
  /* <Formik
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={values => handleSubmit(values)}
      >
        {({
          errors,
          setFieldValue,
          values,
          isValid,
          handleSubmit,
        }) => (
          <Form>
            <Base>
              <TextField
                name="email"
                placeholder="Email"
                error={errors.email}
                type="email"
                width="500px"
                value={values.email}
              />
            </Base>

            <Base>
              <TextField
                name="firstName"
                placeholder="Nome"
                error={errors.firstName}
                type="text"
                width="245px"
                value={values.firstName}
              />

              <TextField
                name="lastName"
                placeholder="Sobrenome"
                error={errors.lastName}
                type="text"
                width="245px"
                value={values.lastName}
              />
            </Base>

            <Base>
              <TextField
                name="prefix"
                placeholder="Prefixo"
                error={errors.prefix}
                type="number"
                width="124px"
                value={values.prefix}
              />

              <TextField
                name="phone"
                placeholder="Telefone"
                error={errors.phone}
                type="text
                "
                width="236px"
                value={values.phone}
              />
            </Base>

            <Base>
              <TextField
                name="country"
                placeholder="País"
                error={errors.country}
                type="select"
                width="245px"
                options={country}
              />

              <TextField
                name="cpf"
                placeholder="CPF"
                error={errors.cpf}
                type="text"
                width="245px"
                value={values.cpf}
              />
            </Base>

            <span>
              <Check onClick={() => setIndication(!indication)}>
                <TextField
                  name="indication"
                  type="checkbox"
                  width="20px"
                />
              </Check>
              <p>Estou a reservar para outra pessoa</p>
            </span>

            {indication && (
              <>
                <Base>
                  <TextField
                    name="firstName1"
                    placeholder="Nome "
                    error={errors.firstName1}
                    type="text"
                    width="245px"
                    value={values.firstName1}
                  />

                  <TextField
                    name="lastName1"
                    placeholder="Sobrenome"
                    error={errors.lastName1}
                    type="text"
                    width="245px"
                    value={values.lastName1}
                  />
                </Base>

                <Base>
                  <TextField
                    name="email1"
                    placeholder="Email"
                    error={errors.email1}
                    type="email"
                    width="500px"
                    value={values.email1}
                  />
                </Base>
              </>
            )}

            <div>
              <Button
                variant="contained"
                type="submit"
                color={theme?.colors?.primary}
                colorText={theme?.colors?.white}
                block
                value={values.firstName}
              >
                Ir para pagamento
              </Button>
            </div>
          </Form>
        )}
      </Formik>
     */
}
