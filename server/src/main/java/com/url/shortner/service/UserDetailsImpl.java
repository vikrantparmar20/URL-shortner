package com.url.shortner.service;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.url.shortner.models.User;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDetailsImpl implements UserDetails {/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String username;
	private String email;
	
	private String password;
	
	private Collection<? extends GrantedAuthority> authorities;
	
	public static UserDetailsImpl build(User user) {
		//Spring security needs grantedAuthtority object to understand the role for 
		//user object
		GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole());
		return new UserDetailsImpl(
				user.getId(),
				user.getUsername(),
				user.getEmail(),
				user.getPassword(),
				Collections.singletonList(authority)
				);
	}
	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}


	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}


	public UserDetailsImpl(Long id, String userName, String email, String password,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.username = userName;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}
	
}
