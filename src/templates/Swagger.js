/api/v1/<%= props.name.plural%>:
  get:
    tags:
      - <%= props.name.first%>
    summary: We can list all <%= props.name.lower%>
    responses:
      200:
        description: successfully
      401:
        description: unauthorized  
      500:
        description: internal server  
  post:
    tags:
      - <%= props.name.first%>
    summary: We can create <%= props.name.lower%>
    consumes:
      - application/json
    parameters:
      - in: body
        name: <%= props.name.plural%>
        description: <%= props.name.plural%>.
        schema:
          type: object
    responses:
      200:
        description: successfully
      401:
        description: unauthorized  
      500:
        description: internal server 

/api/v1/<%= props.name.plural%>/{uuid}:
  get:
    tags:
      - <%= props.name.first%>
    summary: We can show <%= props.name.lower%>
    responses:
      200:
        description: successfully
      401:
        description: unauthorized  
      500:
        description: internal server  
  put:
    tags:
      - <%= props.name.first%>
    summary: We can change <%= props.name.lower%>
    parameters:
      - in: body
        name: <%= props.name.plural%>
        description: <%= props.name.plurals%>.
        schema:
          type: object
    responses:
      200:
        description: successfully
      401:
        description: unauthorized  
      500:
        description: internal server    
  delete:
    tags:
      - <%= props.name.first%>
    summary: We can delete <%= props.name.lower%>
    responses:
      200:
        description: successfully
      401:
        description: unauthorized  
      500:
        description: internal server              
